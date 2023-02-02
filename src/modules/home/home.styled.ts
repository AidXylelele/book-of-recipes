export class HomePageStyles {
  static imgCard = {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: (t: any) =>
      t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  static formContainer = {
    my: 25,
    mx: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };
  static buttonContainer = { mt: 1 };
  static button = { mt: 3, mb: 2 };
  static avatar = { m: 1, bgcolor: 'secondary.main' };
}
