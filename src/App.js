import Table from "./components/Table/Table";

const columns = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
];
const data = [
  {
    id: 1,
    firstName: "Amanda",
    lastName: "Linasta",
    dateOfBirth: "02/04/1980",
    street: "43 8th Adison",
    city: "Addison",
    state: "Alabama",
    stateAbbrev: "AL",
    zipCode: "35083",
    startDate: "02/05/2023",
    department: "Sales",
  },
];
function App() {
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
