import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";

interface Props {
  open: boolean;
  onClose: () => void;
  patientData: any;
}

export default function InfoDialog({ open, onClose, patientData }: Props) {
  const [state, setState] = React.useState({
    alertType: "",
    alertDescription: "",
  });
  const [userData, setUserData] = useLocalStorage("user-data", {});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
    console.log({ [event.target.name]: event.target.value });
  };

  const sendData = (data) => {
    return axios.post("", data);
  };
  const onHandle = (e) => {
    // sendData();
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Send Alert</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Name: {patientData?.firstName} {patientData?.lastName}
          </DialogContentText>
          <DialogContentText>
            UserName: {patientData?.username}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Alert Type"
            type="alertType"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="name"
            label="Alert Description"
            type="alertDescription"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={onHandle} color="primary" variant="contained">
            send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
