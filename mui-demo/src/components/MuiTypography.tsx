import { Typography } from '@mui/material'


export const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>h1 Heading</Typography>
            <Typography variant='h2'>h2 Heading</Typography>
            <Typography variant='h3'>h3 Heading</Typography>
            <Typography variant='h4' gutterBottom>h4 Heading</Typography> { /*gutterBottom adds padding below, dependent on size of variant*/}
            <Typography variant='h5'>h5 Heading</Typography>
            <Typography variant='h6'>h6 Heading</Typography>

            <Typography variant='subtitle1'>Sub title 1</Typography>
            <Typography variant='subtitle2'>Sub title 2</Typography>

            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione, doloribus rem nisi numquam sunt quibusdam, cupiditate a ducimus harum eos, voluptatem tempora. Impedit quaerat ab eveniet. Facilis, aspernatur maxime.</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto totam beatae alias a ratione aliquid non in placeat eos tempora expedita nam provident aliquam enim, illum sint vero porro repudiandae.</Typography>

        </div>
    )
}