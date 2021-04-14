import * as React from "react";
import { DataGrid, GridCellParams } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";
import { Grid } from "@material-ui/core";
import SectionHeader from "../../components/SectionHeader";
import axios from "axios";
import InfoDialog from "./components/dialog";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function ViewAllVitals() {
  const [patientData, setPatientData] = React.useState<any>();
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedUser, setSelectedUser] = React.useState<any>();
  const [userData, setUserData] = useLocalStorage("user-data", {});

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });

  const fetchAllUserPatients = async () => {
    return await axios.get("/api/info/" + userData?.username);
  };

  const dataConv = (data: []) => {
    return data.map((d: any) => ({
      id: Math.floor(Math.random() * 100),
      bodyTemperature: d.bodyTemperature,
      heartRate: d.heartRate,
      bloodTemperature: d.bloodTemperature,
      respiratoryRate: d.respiratoryRate,
      weight: d.weight,
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

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid container justify="center" direction="column" alignItems="center">
        <Grid item>
          <SectionHeader title="View All Vitals" titleVariant="h3" />
        </Grid>
        <Grid item>
          <div style={{ height: 800, width: "800px" }}>
            <DataGrid
              onCellClick={(param: GridCellParams, event: React.MouseEvent) => {
                setSelectedUser(param.row);
                setOpen(true);
                console.log(param.row);
              }}
              columns={[
                {
                  field: "bodyTemperature",
                  width: 200,
                  headerName: "Body Temperature",
                },
                {
                  field: "heartRate",
                  width: 200,
                  headerName: "Heart Rate",
                },
                {
                  field: "bloodTemperature",
                  width: 200,
                  headerName: "Blood Temperature",
                },
                {
                  field: "respiratoryRate",
                  width: 200,
                  headerName: "Respiratory Rate",
                },
                {
                  field: "weight",
                  width: 200,
                  headerName: "weight",
                },
                // { field: "username", width: 200, headerName: "User Name" },
              ]}
              rows={patientData || []}
              // filterModel={}
            />
          </div>
        </Grid>
      </Grid>

      <InfoDialog
        open={open}
        patientData={selectedUser}
        onClose={handleClose}
      />
    </>
  );
}
