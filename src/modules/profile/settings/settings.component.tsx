import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { SettingsStyles } from './settings.styled';
import { useMutation, useQueryClient } from 'react-query';
import { userService } from '../../services/user.service';
import { IUpdateUserPassword } from '../../common/types/user.types';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';

export const Settings = () => {
  const QueryClient = useQueryClient();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [oldPassword, SetOldPassword] = React.useState<string>('');
  const [newPassword, SetNewPassword] = React.useState<string>('');
  const [newURL, setNewURL] = React.useState<string>('');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const changePassword = useMutation({
    mutationFn: async (passwords: IUpdateUserPassword) => {
      const user = await userService.getUserByToken();
      const changeData = { ...passwords, email: user.email };
      return await userService.updateUserPassword(changeData);
    },
    onSuccess: () => {
      QueryClient.invalidateQueries([QUERY_KEYS.USER]);
    }
  });
  const changeAvatar = useMutation({
    mutationFn: async (avatar: string) => {
      const user = await userService.getUserByToken();
      const changeData = { avatar, email: user.email };
      return await userService.updateUserAvatar(changeData);
    },
    onSuccess: () => {
      QueryClient.invalidateQueries([QUERY_KEYS.PROFILE]);
    }
  });

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={SettingsStyles.mainTitle}>Change password</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2} direction="column" justifyContent="center">
            <TextField
              id="old-password"
              label="Old password"
              size="small"
              value={oldPassword}
              type="password"
              onChange={(event) => {
                SetOldPassword(event.target.value);
              }}
            />
            <TextField
              id="new-password"
              label="New password"
              size="small"
              value={newPassword}
              type="password"
              onChange={(event) => {
                SetNewPassword(event.target.value);
              }}
            />
            <Button
              color="primary"
              onClick={() => {
                const data = { oldPassword, newPassword };
                changePassword.mutate(data);
              }}
            >
              Submit
            </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={SettingsStyles.mainTitle}>Change avatar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            id="avatar"
            label="URL"
            size="small"
            value={newURL}
            onChange={(event) => {
              setNewURL(event.target.value);
            }}
          />
          <Button
            color="primary"
            onClick={() => {
              changeAvatar.mutate(newURL);
            }}
          >
            Submit
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
