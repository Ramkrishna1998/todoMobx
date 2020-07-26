import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ListContain from '../list/ListContain';
import './Container.css';
import { observer } from 'mobx-react';



const Container: React.FC = () => {

    const { handleOnChangeEvent, handleOnSubmitEvent, removeItem, list, tempList} = ListContain;
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return(
        <div>
            <div className='createBox'>
                <div>
                    <form onSubmit={(e) => handleOnSubmitEvent(e)}>
                        <div>
                            <input
                                className="inputBox" 
                                ref = {inputRef}
                                value= {tempList}
                                onChange={(e) => handleOnChangeEvent(e)}
                                placeholder="Type...">
                            </input>
                        </div>
                        <button className="buttonBox" ref = {buttonRef} type='submit'>Add</button>
                    </form>
                </div>
                <div>
                {list.map((nlist: any, index: number) => (
                        <p className="generatedList" key={index} >{nlist}

                            <FontAwesomeIcon
                                className="faicons"
                                icon={faTrash}
                                onClick={() =>removeItem(nlist)}
                            />
                        </p>
                    ))}

                </div>

            </div>
        )  
 
        </div>
    )
}


export default observer(Container);