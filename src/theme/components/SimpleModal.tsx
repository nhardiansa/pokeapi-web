import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface Props {
  isOpen: boolean
  closeHandler: () => void
  imgUrl: string
}

const ModalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  // borderRounded: '2rem',
  boxShadow: 24,
  p: 4,
};

export default function SimpleModal(props: Props) {
  return (
    <>
      <Modal
        open={props.isOpen}
        onClose={props.closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Card sx={{ maxWidth: 845 }}>
            <CardMedia
              sx={{ height: 340 }}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${1}.png`}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem, ipsum.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, aliquam?
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  )
}
