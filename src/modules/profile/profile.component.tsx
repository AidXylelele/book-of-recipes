import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CardActionArea,
  Stack,
} from '@mui/material';
import React from 'react';
import { Header } from '../common/components/header/header';
import { Box } from '@mui/system';
import { ProfileStyles } from './profile.styled';
import { Settings } from './settings/settings.component';
import { useNavigate } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import { ProfileHeaderButtons } from '../common/consts/header-options.consts';

interface IProps {
  name: string;
  avatar: string;
}

export const ProfilePage: React.FC<IProps> = (props) => {
  const { name, avatar } = props;
  const navigate = useNavigate();
  return (
    <Box sx={ProfileStyles.container}>
      <Header options={ProfileHeaderButtons} />
      <Card sx={ProfileStyles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={ProfileStyles.media}
            image={avatar}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Stack spacing={1} justifyContent="center">
            <Settings />
            <Button
              size="small"
              color="primary"
              onClick={() => navigate(APP_KEYS.ROUTER_KEYS.TODOS)}
            >
              Back
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                localStorage.clear();
                navigate(APP_KEYS.ROUTER_KEYS.ROOT);
              }}
            >
              Logout
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </Box>
  );
};
