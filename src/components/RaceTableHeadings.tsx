const RaceTableHeadings = () => {
  return (
    <tr>
      <th
        scope="col"
        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
      >
        Circuit
      </th>
      <th
        scope="col"
        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
      >
        Date
      </th>
      <th
        scope="col"
        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
      >
        FP1
      </th>
      <th
        scope="col"
        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
      >
        FP2
      </th>
      <th
        scope="col"
        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
      >
        FP3/Sprint
      </th>
      <th
        scope="col"
        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
      >
        Qualifying
      </th>
      <th
        scope="col"
        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
      >
        Race
      </th>
    </tr>
  );
};

export default RaceTableHeadings;
