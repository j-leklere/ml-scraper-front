import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import mainService from "../services/mainService";

const SaveSearchModal = ({
  open,
  handleClose,
  searchInput,
  quantityInput,
  onSave,
  userId,
  setSaved,
}) => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (open) {
      reset({
        name: "",
        term: searchInput,
        quantity: quantityInput,
      });
    }
  }, [open, searchInput, quantityInput, reset]);

  const handleSave = async (data) => {
    setLoading(true);
    try {
      const response = await mainService.saveSearch({
        ...data,
        userId: userId,
      });
      if (response?.data?.status === "success") {
        setSaved(true);
        onSave(data);
        handleClose();
      } else {
        console.error(response?.data?.message);
      }
    } catch (error) {
      console.error("Error al guardar la búsqueda:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      className="save-search-modal"
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        style: { borderRadius: "1rem" },
      }}
    >
      <DialogTitle
        className="save-search-modal--title"
        sx={{
          color: "#fcfcfc",
          backgroundColor: "#228be6",
          fontSize: "1.6rem",
          fontWeight: "600",
        }}
      >
        Guardar Búsqueda
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(handleSave)}>
          <div className="save-search-modal--fields">
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "El nombre es requerido" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nombre"
                  variant="standard"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
            <Controller
              name="term"
              control={control}
              defaultValue={searchInput}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Término"
                  variant="standard"
                  fullWidth
                  disabled
                />
              )}
            />
            <Controller
              name="quantity"
              control={control}
              defaultValue={quantityInput}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Cantidad"
                  type="number"
                  variant="standard"
                  fullWidth
                  disabled
                />
              )}
            />
          </div>

          <DialogActions className="save-search-modal--btns">
            <Button
              className="save-search-modal--btns_btn__cancel"
              onClick={handleClose}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button
              className="save-search-modal--btns_btn__save"
              type="submit"
              variant="contained"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Guardar"}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SaveSearchModal;
