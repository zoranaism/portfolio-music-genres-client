/* eslint-disable no-use-before-define */

import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Loading from "../../components/Loading";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags({ genres, setRelations }) {
  const onTagsChange = (event, values) => {
    const ids = values.map((value) => {return value.id})
    setRelations(ids); 
  };
  
  return (
    <>
      {!genres ? (
        <Loading />
      ) : (
        <Autocomplete
          multiple
          id="relations"
          options={genres}
          disableCloseOnSelect
          getOptionLabel={(option) => option.name}
          onChange={onTagsChange}
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.name}
            </React.Fragment>
          )}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Relations"
            />
          )}
        />
      )}
    </>
  );
}