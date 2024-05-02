import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function PopularDestinationsControl() {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios
      .get(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/static-sections/popular-destinations`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/static-sections/popular-destinations`,
      )
      .then(async ({ data }) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log("static-sections-PopularDestinations==> ", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 70 },
    { field: "titleAR", headerName: "Title-AR", width: 130 },
    { field: "titleEN", headerName: "Title-EN", width: 130 },
    {
      field: "img",
      headerName: "Image",
      width: 200,
      renderCell: (params: any) => (
        <img
          src={params.value}
          alt="Destination"
          style={{ width: 200, height: 80 }}
        />
      ),
    },
  ];
  const [errors, setErrors] = useState({
    titleAR: "",
    titleEN: "",
    img: "",
  });
  const [FormDataState, setFormData] = useState({
    titleAR: "",
    titleEN: "",
    img: null,
  });

  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: Event) => {
    setLoading(true);
    e.preventDefault();

    if (FormDataState.titleAR.length < 2) {
      setErrors({
        ...errors,
        titleAR: "Title AR must be at least 2 characters",
      });
      setLoading(false);
      return;
    }
    if (FormDataState.titleEN.length < 2) {
      setErrors({
        ...errors,
        titleEN: "Title EN must be at least 2 characters",
      });
      setLoading(false);
      return;
    }
    if (!FormDataState.img) {
      setErrors({
        ...errors,
        img: "Image is required",
      });
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("token") || "";

      await axios.post(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/static-sections/popular-destinations`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/static-sections/popular-destinations`,
        {
          titleAR: FormDataState.titleAR,
          titleEN: FormDataState.titleEN,
          img: FormDataState.img,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setLoading(false);

      // Reset form data after successful submission
      setFormData({
        titleAR: "",
        titleEN: "",
        img: null,
      });
      // Refresh data
      getData();
    } catch (error) {
      setLoading(false);

      console.error("Error submitting data:", error);
    }
  };
  const [itemSelections, setItemSelections] = useState([]);
  return (
    <div className={`mb-44 h-[400px] w-full`}>
      <DataGrid
        className={`h-full w-full bg-white`}
        rows={data}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        onRowSelectionModelChange={(row) => {
          /* // eslint-disable-next-line @typescript-eslint/ban-ts-comment //
          @ts-ignore */
          setItemSelections(row);
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      {itemSelections.length > 0 && (
        <button
          name="delete"
          onClick={() => {
            const token = localStorage.getItem("token") || "";

            itemSelections.map((id: string) => {
              axios
                .delete(
                  process.env.NEXT_PUBLIC_NODE_MODE === "development"
                    ? `${process.env.NEXT_PUBLIC_API_LOCAL}/static-sections/popular-destinations/${id}`
                    : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/static-sections/popular-destinations/${id}`,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  },
                )
                .then(() => {
                  getData();
                });
            });
          }}
          className={`hover:bg-red-500 my-2 rounded-lg bg-rose-600 px-2 py-1 text-white`}
        >
          Delete
        </button>
      )}
      {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment //
      @ts-ignore */}
      <form className={`flex flex-col gap-2`} onSubmit={onSubmit}>
        <div className={`my-2 flex flex-wrap gap-2`}>
          <input
            className={`rounded-sm border px-2 py-1 focus-visible:outline-none`}
            type="text"
            placeholder={`title ar`}
            value={FormDataState.titleAR}
            onChange={(e) => {
              setErrors({
                ...errors,
                titleAR: "",
              });
              setFormData({
                ...FormDataState,
                titleAR: e.target.value,
              });
            }}
          />
          {errors.titleAR && (
            <span className="text-red-500">{errors.titleAR}</span>
          )}
          <input
            className={`rounded-sm border px-2 py-1 focus-visible:outline-none`}
            type="text"
            placeholder="title en"
            value={FormDataState.titleEN}
            onChange={(e) => {
              setErrors({
                ...errors,
                titleEN: "",
              });
              setFormData({
                ...FormDataState,
                titleEN: e.target.value,
              });
            }}
          />
          {errors.titleEN && (
            <span className="text-red-500">{errors.titleEN}</span>
          )}
        </div>
        <div>
          <div>
            <input
              type="file"
              placeholder="img"
              className={`max-w-[200px] overflow-hidden `}
              onChange={(e) =>
                // @ts-ignore
                setFormData({ ...FormDataState, img: e.target.files[0] })
              }
            />
            {errors.img && <span className="text-red-500">{errors.img}</span>}
          </div>

          <input
            disabled={loading}
            className={`my-2 cursor-pointer rounded-sm p-2 text-center ${
              !loading
                ? "bg-[#117c99b3] hover:bg-[#117c99a7]"
                : "bg-[#117c9948] hover:bg-[#117c9948]"
            }  text-white`}
            type="submit"
            value={loading ? "Loading..." : "Add"}
          />
        </div>
      </form>
    </div>
  );
}
