import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function PaginationRounded({count, updatePage}) {
  return (
    <Stack spacing={2}>
      <Pagination count={count} shape="rounded" hideNextButton={true} hidePrevButton={true} onClick={(e)=> {updatePage(parseInt(e.target.innerText))}} />
    </Stack>
  );
}