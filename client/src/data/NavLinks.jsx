import  KeyboardAlt  from '@mui/icons-material/KeyboardAlt'
import  FilterDrama  from '@mui/icons-material/FilterDrama'
import BookIcon from '@mui/icons-material/Book';
import  SmartToy from '@mui/icons-material/SmartToy'
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

export default function NavLinks() {
    return [
        {name:"Blogs",Icon:<BookIcon/>,link:"/blog"},
        {name:"Bot",Icon:<SmartToy/>,link:"/"},
        {name:"Editor",Icon:<KeyboardAlt/>,link:"/editor"},
        {name:"Images",Icon:<ImageSearchIcon/>,link:"/images"},
        {name:"Recent",Icon:<FilterDrama/>,link:"/recent"},
    ]
}