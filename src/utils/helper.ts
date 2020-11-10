import { CONTROL_TYPES, Field, Form, ParentDataType } from "../schema/FormTypes";

export const mapToFinalState = (formJson: Form) => {
  const finalState: any = {};

  const { fields } = formJson;
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].type === CONTROL_TYPES.table) {
      const tableField = fields[i];
      const key = tableField.stateKeyToUse
        ? tableField.stateKeyToUse
        : tableField.k;
      finalState[key] = [];
      const columns = [];
      if (tableField.columns){
        for (let j = 0; j < tableField.columns.length; j++) {
          const col = tableField.columns[j];
          columns.push(col.stateKeyToUse ? col.stateKeyToUse : col.label);
        }
      }
      if (tableField.rows) {
        for (let j = 0; j < tableField.rows.length; j++) {
          const currentRow = tableField.rows[j];
          let rowState: any = {};
          for (let k = 0; k < currentRow.length; k++) {
            const field = currentRow[k];
            rowState = { ...rowState, [columns[k]]: field.value };
          }
          finalState[key].push(rowState);
        }
      }
    } else {
      const field = fields[i];
      const key = field.stateKeyToUse ? field.stateKeyToUse : field.k;
      finalState[key] = field.value;
    }
  }
  return finalState;
};

export const initializeHashMapForKeyPositions = (fields: Field[], hashSlice: any, hashMap: any) => {
  // Currently maps to depth of 1 - considering there cannot be a table inside a table
  for(let i = 0; i < fields.length; i++){
      let key = fields[i].k;
      if (fields[i].type === CONTROL_TYPES.table) {
          const rows = fields[i].rows;
          let structure;
          if(hashSlice) {
              structure = hashSlice[key];
          } else {
              hashMap[key] = {
                  position: i
              };
              structure = hashMap[key];
          }
          if (rows && rows.length > 0) {
              for(let j = 0; j < rows?.length; j++){
                  initializeHashMapForKeyPositions(rows[j], structure, null);
              }
          }
      } else {
          if (hashSlice) {
              hashSlice[key] = i
          } else {
              hashMap[key] = i;
          }
      }
  }
}

export const updateValueAtKeyHelper = (value: any, key: string, parentData: ParentDataType, hashMap: any, formJson: any, formStateInternal: any, stateKeyToUse: string) => {
  if (parentData) {
    let parentPosition = hashMap[parentData.k].position;
    let childPosition = hashMap[parentData.k][key];
    const parentField = formJson.fields[parentPosition];
    const child = parentField.rows[parentData.index][childPosition];
    child.value = value;

    if (formStateInternal && parentData.k in formStateInternal) {
      let parent = formStateInternal[parentData.k];
      const keyForState = parentField.columns[childPosition].stateKeyToUse ? parentField.columns[childPosition].stateKeyToUse : parentField.columns[childPosition].label;
      parent[parentData.index][keyForState] = value
    }

  } else {
    let position = hashMap[key];
    const field: Field = formJson.fields[position];
    if(field) {
      field.value = value;
    }

    const keyForState = stateKeyToUse ? stateKeyToUse : key;
    if (formStateInternal && keyForState in formStateInternal) {
      formStateInternal[keyForState] = value;
    }
  }
}

export const getValueAtKeyHelper = (key: string, parentData: ParentDataType, hashMap: any, formJson: any) => {
  if (parentData) {
    let parentPosition = hashMap[parentData.k].position;
    let childPosition = hashMap[parentData.k][key];
    const parentField = formJson.fields[parentPosition];
    const child = parentField.rows[parentData.index][childPosition];
    return child.value;
  } else {
    let position = hashMap[key];
    const field: Field = formJson.fields[position];
    return field.value;
  }
}