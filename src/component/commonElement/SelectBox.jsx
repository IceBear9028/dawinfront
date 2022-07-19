import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import zIndex from '@mui/material/styles/zIndex';

const SelectBox = ({data,labelName,width}) => {
    const [selectValue, setSelectValue] = useState("");

    const handleChange = (event) => {
        setSelectValue(event.target.value);
    };

    const LabelNameParent = `select-parent- ${labelName}`;
    const LabelNameChild = `select-child- ${labelName}`;

    return(
        <>
            <FormControl sx={{ m:1, minWidth: {width}}}>
                <InputLabel id={LabelNameParent}>{labelName}</InputLabel>
                <Select
                    labelId="select-helper-labelName"
                    id={LabelNameChild}
                    value={selectValue}
                    label={labelName}
                    onChange={handleChange}
                    >
                    {data.map((item, index) => {
                        return(
                            <MenuItem value = {item.value} key = {index}> { item.boxtext } </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </>
    )
}

export default SelectBox