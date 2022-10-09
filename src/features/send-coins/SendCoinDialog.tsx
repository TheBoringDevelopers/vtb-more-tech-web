import {
  Button,
  Select,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl, InputLabel
} from '@mui/material';
import { useStore } from 'effector-react';
import { SendCoinModel } from 'src/features/send-coins/send-coin-model';
import { FormModel } from 'src/features/send-coins/form-model';

type SendCoinDialogProps = {};
export const SendCoinDialog = (props: SendCoinDialogProps) => {
  const open = useStore(SendCoinModel.openModal$);
  const loading = useStore(SendCoinModel.loading$);

  const form = useStore(FormModel.state$);
  return <Dialog open={open} onClose={() => SendCoinModel.clickedClose()}>
    <DialogTitle>Отправить</DialogTitle>
    <DialogContent className="w-[400px]">
      <div className="flex flex-col gap-1.5">
        <FormControl fullWidth margin="dense">
          <InputLabel id="mon">Монета</InputLabel>
          <Select
            value={form.type}
            labelId="mon"
            id="mon"
            label="Монета"
            onChange={(event) => FormModel.changeType(event.target.value as any)}
          >
            <MenuItem value={'ruble'}>Ruble</MenuItem>
            <MenuItem value={'matic'}>Matic</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="user">Пользыватель</InputLabel>
          <Select
            value={form.userId}
            labelId="user"
            id="user"
            margin="dense"
            label="Пользыватель"
            onChange={(event) => FormModel.changeUserId(event.target.value)}
          >
            <MenuItem value={2}>Леонид Обрамов</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={(event) => FormModel.changeAmount(event.target.value)}
          margin="dense"
          id="name"
          label="Сумма"
          type="text"
          variant="standard"
        />
      </div>
    </DialogContent>

    <DialogActions>
      <Button onClick={() => SendCoinModel.clickedClose()}>Закрыть</Button>
      <Button variant="contained" disabled={loading} onClick={() => SendCoinModel.clickedOkay()}>Отправить</Button>
    </DialogActions>
  </Dialog>
};
