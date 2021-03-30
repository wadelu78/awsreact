import './App.css'
import {
  Typography,
  AppBar,
  Button,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from '@material-ui/core'
import { Dashboard, Memory, Add } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import GridLayout from 'react-grid-layout'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'

function App() {
  const classes = useStyles()
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ]
  return (
    <>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar>
          <IconButton color='inherit'>
            <Dashboard />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Services Dashboard
          </Typography>

          <IconButton color='inherit'>
            <Add />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
        <GridLayout
          className='layout'
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          <div key='a'>a</div>
          <div key='b'>b</div>
          <div key='c'>c</div>
        </GridLayout>
      </main>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default App
