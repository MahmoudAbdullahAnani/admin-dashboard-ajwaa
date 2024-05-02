import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
function countSearches(data: SearchResult[]) {
  let countSearch = 0;
  let countChoose = 0;
  data.map(({ search, chooseTicket }) => {
    // @ts-ignore
    countSearch += search.length;
    // @ts-ignore
    countChoose += chooseTicket.length;
  });
  return {
    countSearch,
    countChoose,
  };
}
function CharTrip({
  cashData,
}: {
  cashData: { data: SearchResult[]; count: number };
}) {
  // Searches
  const dataChartSearch = countSearches(cashData.data);
  const dataSearches = {
    labels: ["Search for flights", "Choose a ticket"],
    datasets: [
      {
        data: [
          dataChartSearch.countSearch,
          dataChartSearch.countChoose - dataChartSearch.countChoose / 2,
        ],
        backgroundColor: ["#005A6C", "#36A2EB", "#FF6384"],
      },
    ],
  };
  const optionsSearches = {
    cutout: "20%",
  };
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6">
      <div className="rounded-md bg-white p-4 shadow-md  dark:bg-boxdark">
        <h2 className="mb-4 text-center text-lg font-semibold text-black dark:text-white">
          {"Searches"}
        </h2>
        <Chart type="doughnut" data={dataSearches} options={optionsSearches} />
      </div>
    </div>
  );
}

export default CharTrip;
