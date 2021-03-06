import React from 'react'
import { default as MaterialDialog } from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'

import Card from '../../components/Card'
import Button from '../../components/Button'

import iconAddPhoto from './../../assets/icons/add-photo.svg'
import iconVideo from './../../assets/icons/video.svg'

import './index.css'

const albumData = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/300/150',
    title: 'Photo title',
    location: '',
    description:
      'Sed id nunc porttitor, rhoncus ex nec, lobortis nisi. Vestibulum pulvinar enim eu dolor fringilla pulvinar. Fusce volutpat euismod blandit.'
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/300/150',
    title: 'Photo title',
    location: '',
    description:
      'Sed id nunc porttitor, rhoncus ex nec, lobortis nisi. Vestibulum pulvinar enim eu dolor fringilla pulvinar. Fusce volutpat euismod blandit.'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/300/150',
    title: 'Photo title',
    location: '',
    description:
      'Sed id nunc porttitor, rhoncus ex nec, lobortis nisi. Vestibulum pulvinar enim eu dolor fringilla pulvinar. Fusce volutpat euismod blandit.'
  }
]

const Dialog = props => {
  const { onClose, ...restProps } = props

  return (
    <MaterialDialog className="dialog" onClose={onClose} {...restProps}>
      <DialogContent className="dialog__content">
        <div className="album">
          <header className="album__header">
            <TextField
              id="outlined-bare"
              className="album__title"
              defaultValue="Album name"
              margin="normal"
              placeholder="Album name"
              variant="outlined"
            />
            <div className="album__actions">
              <Button className="button-photo" typeSecondary>
                <img src={iconAddPhoto} alt="" />
                Add photo
              </Button>
              <Button className="button-video" typeSecondary>
                <img src={iconVideo} alt="" />
                Add link for video
              </Button>
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
                typePhoto
              />
            ))}
          </div>
        </div>
      </DialogContent>
      <DialogActions className="dialog__actions">
        <Button className="button-cancel" onClick={onClose}>
          cancel
        </Button>
        <Button className="button-save" onClick={onClose} typePrimary>
          save
        </Button>
      </DialogActions>
    </MaterialDialog>
  )
}

export default Dialog
