import React from 'react'
import { default as MaterialDialog } from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'

import Card from '../../components/Card'
import Button from '../../components/Button'

import './index.css'

const albumData = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/300/150',
    title: 'Photo title',
    location: 'Location',
    description:
      'Sed id nunc porttitor, rhoncus ex nec, lobortis nisi. Vestibulum pulvinar enim eu dolor fringilla pulvinar. Fusce volutpat euismod blandit.'
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/300/150',
    title: 'Photo title',
    location: 'Location',
    description:
      'Sed id nunc porttitor, rhoncus ex nec, lobortis nisi. Vestibulum pulvinar enim eu dolor fringilla pulvinar. Fusce volutpat euismod blandit.'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/300/150',
    title: 'Photo title',
    location: 'Location',
    description:
      'Sed id nunc porttitor, rhoncus ex nec, lobortis nisi. Vestibulum pulvinar enim eu dolor fringilla pulvinar. Fusce volutpat euismod blandit.'
  }
]

const Dialog = props => {
  const { ...restProps } = props

  return (
    <MaterialDialog className="dialog" {...restProps}>
      <DialogContent className="dialog__content">
        <div className="album">
          <header className="album__header">
            <TextField
              id="outlined-bare"
              className="album__title"
              defaultValue="Album name"
              margin="normal"
              variant="outlined"
            />
            <div className="album__actions">
              <Button className="button-photo">Add photo</Button>
              <Button className="button-photo">Add link for video</Button>
            </div>
          </header>
          <div className="album__body">
            {albumData.map(album => (
              <Card
                key={album.id}
                imageUrl={album.imageUrl}
                title={album.title}
                location={album.location}
                description={album.description}
              />
            ))}
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button className="button-cancel">cancel</Button>
        <Button className="button-save" typePrimary>
          save
        </Button>
      </DialogActions>
    </MaterialDialog>
  )
}

export default Dialog
