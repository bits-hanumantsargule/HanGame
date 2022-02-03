import React,{useState} from 'react'
import Select from 'react-select';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
export default function CustomSelect() {

    const [selectedOption, setselectedOption] = useState(null);


 
    return (
            <div className="container">
  <div className="row">
    <div className="col-2 custselect">
    <Select 
     defaultValue={selectedOption}
     onChange={setselectedOption}
     options={options}/>
    </div>
  </div>
</div>
    )
}
