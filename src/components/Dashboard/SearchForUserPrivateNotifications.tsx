import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";

import { useRecoilState } from "recoil";
import { RootState } from "../../data/store";
import { SearchUsers } from "../../data/RecoilState/Profile/Friends";
import { DataOfUserSearchPrivateNotifications } from "../../data/RecoilState/Notifications/NotificationsData";
import { addUserLogged } from "@/data/Features/LoggedUser";

function SearchForUserPrivateNotifications() {
  const router = useRouter();
  const dispatch = useDispatch();
  const stateUserData = useSelector((state: RootState) => state.loggedUser);
  // console.log(stateUserData);
  const getUserData = async () => {
    const token = localStorage.getItem("token") || "";
    await axios
      .get(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/me`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(async ({ data }) => {
        if (!["admin", "manger"].includes(data.role)) {
          return router.replace("https://ittrip.vercel.app");
        }
        localStorage.setItem("avatar", data.avatar);
        localStorage.setItem("firstName", data.firstName);
        localStorage.setItem("lastName", data.lastName);
        localStorage.setItem("email", data.email);
        localStorage.setItem("age", data.age);
        
        dispatch(addUserLogged(data));
        // await getPublicNotifications();
        // await getPrivateNotifications();
        // handleAllNotifications();
      })
      .catch((error) => {
        console.log(error);
        if (error.response?.data.statusCode === 401) {
          localStorage.removeItem("token");
        }
      });
  };

  useEffect(() => {
    getUserData();
  }, []);
  const [searchUsersState, setSearchUsersState] = useRecoilState(SearchUsers);
  const [, setDataOfUserSearchPrivateNotificationsState] = useRecoilState(
    DataOfUserSearchPrivateNotifications,
  );
  const [valueSearch, setValueSearch] = useState("");

  const searchUsers = async (keyword: string) => {
    const token = localStorage.getItem("token") || "";
    if (keyword === "") {
      return false;
    }
    await axios
      .get(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/search-friends/${keyword}`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/search-friends/${keyword}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(({ data }) => {
        setSearchUsersState(data.data);
      })
      .catch((error) => {
        console.log("Search Users Dashboard==> ", error);
      });
  };

  const addToUpdatePrivateNotifications = (
    _id: string,
    avatar: string,
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    notification: [],
  ) => {
    setSearchUsersState([]);
    setValueSearch("");
    const dataOfUserChoose = {
      _id,
      avatar,
      firstName,
      lastName,
      notification,
      age,
      email,
    };
    setDataOfUserSearchPrivateNotificationsState(dataOfUserChoose);
  };

  const inputRef = useRef(null);

  return (
    <div className={`my-2`}>
      <div className={`flex gap-[10px]`}>
        <div className={`relative w-full max-w-[548px]`}>
          <div className={`relative w-full max-w-[548px]`}>
            <input
              ref={inputRef}
              type="text"
              className={`mx-auto w-full max-w-[548px] rounded-[16px] border text-center shadow-[#005a6c4d] focus-visible:shadow-lg focus-visible:outline-[#117c99b8] ${
                searchUsersState.length > 0 ? "rounded-b-none" : ""
              }  p-[12px] text-[16px] font-medium text-[#333333]`}
              placeholder={"Select user"}
              onChange={(e) => {
                setValueSearch(e.target.value);
                searchUsers(e.target.value);
              }}
              value={valueSearch}
            />
            <span
              className={`absolute bg-[#117c99b8] text-white ${
                searchUsersState.length > 99
                  ? "h-[50px] w-[50px]"
                  : "h-[30px] w-[30px]"
              }  left-5 top-[50%] flex translate-x-[-50%] translate-y-[-50%] items-center justify-center 
                rounded-[50%]
              border border-[#117C99]`}
            >
              {searchUsersState.length}
            </span>
          </div>
          <div className={`w-full rounded-b-lg bg-white`}>
            {searchUsersState.length === 0 &&
            valueSearch !== "" &&
            document.activeElement === inputRef.current ? (
              <div>
                <p
                  className={`button-5 relative p-5 text-center text-[16px] font-medium text-[#333333]`}
                >
                  {"لا يوجد نتائج"}
                </p>
              </div>
            ) : null}
            {searchUsersState.map(
              ({
                _id,
                avatar,
                firstName,
                lastName,
                notification,
                email,
                age,
              }) => (
                <div
                  key={`${_id}-${Math.random()}`}
                  className={`flex items-center justify-between gap-[17px] rounded-[16px] bg-[#FFFFFF] p-5`}
                >
                  <div className={`w-[20%] `}>
                    <img
                      src={
                        avatar ||
                        "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                      }
                      className={`rounded-[50%]`}
                      width={100}
                      height={100}
                      alt={`${firstName}-${lastName}`}
                    />
                  </div>
                  <div
                    className={`flex flex-1 items-center justify-between gap-[17px]`}
                  >
                    <h4>
                      {`${firstName} ${lastName}`.length > 25
                        ? `${firstName} ${lastName}`.slice(0, 25) + "..."
                        : `${firstName} ${lastName}`}
                    </h4>
                    <button
                      name="addToUpdatePrivateNotifications"
                      className={`flex h-[48px] w-[48px] items-center justify-center rounded-[16px] bg-[#117c99b8] text-white hover:bg-[#117c99e0]`}
                      onClick={() =>
                        addToUpdatePrivateNotifications(
                          _id,
                          avatar,
                          firstName,
                          lastName,
                          email,
                          age,
                          notification,
                        )
                      }
                    >
                      {"اختيار"}
                    </button>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        {/* <button
          className={`text-[#FFFFFF] bg-[#117C99] hover:bg-[#117c99b8] duration-200 rounded-[16px] h-[48px] p-[10px]`}
        
        >
          بحث
        </button> */}
      </div>
    </div>
  );
}

export default SearchForUserPrivateNotifications;
