import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  }
}));

const style = {
  wordWrap: 'break-word'
}

export default function Emoji(props) {
  const { emojiTranslation } = props;
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
      fullWidth
        id="standard-basic" 
        label="Emoji" 
        value={emojiTranslation}
        />
        
    </form>
  );
}