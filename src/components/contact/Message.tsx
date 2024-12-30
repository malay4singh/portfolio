import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

interface ErrorProps {
        message: string,
        onClose?: () => void
}

function Error(props: ErrorProps) {
        const [open, setOpen] = useState<boolean>(true);

        const handleClose = () => {
                setOpen(false);
                if(props.onClose){
                        props.onClose();
                }
        }

        return (
                <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        open={open}
                        sx={{ width: 'fit-content' }}
                        autoHideDuration={2000}
                        onClose={handleClose}
                >
                        <Alert
                                severity="info"
                                sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
                        >
                                {props.message}
                        </Alert>
                </Snackbar>
        )
}

export default Error