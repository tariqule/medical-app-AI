import * as React from "react";
import { DataGrid, GridCellParams } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";
import { Grid } from "@material-ui/core";
import SectionHeader from "../../components/SectionHeader";
import axios from "axios";

export default function BasicFilteringGrid() {
  const [patientData, setPatientData] = React.useState<any>();

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });

  const fetchAllUserPatients = async () => {
    return await axios.get("/api/user");
  };

  const dataConv = (data: []) => {
    return data.map((d: any) => ({
      id: Math.floor(Math.random() * 100),
      firstName: d.firstName,
      lastName: d.lastName,
      username: d.username,
    }));
  };
  React.useEffect(() => {
    fetchAllUserPatients()
      .then((res) => {
        console.log(dataConv(res.data));
        setPatientData(dataConv(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Grid container justify="center" direction="column" alignItems="center">
      <Grid item>
        <SectionHeader title="View All Patients" titleVariant="h3" />
      </Grid>
      <Grid item>
        <div style={{ height: 800, width: "800px" }}>
          <DataGrid
            onCellClick={(param: GridCellParams, event: React.MouseEvent) => {
              console.log(param.row);
            }}
            columns={[
              { field: "firstName", width: 200, headerName: "First Name" },
              { field: "lastName", width: 200, headerName: "Last Name" },
              { field: "username", width: 200, headerName: "User Name" },
            ]}
            rows={patientData || []}
            // filterModel={}
          />
        </div>
      </Grid>
    </Grid>
  );
}
