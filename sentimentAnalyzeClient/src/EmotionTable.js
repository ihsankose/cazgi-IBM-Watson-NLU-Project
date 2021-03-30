import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
       const emotions = this.props.emotions;

        let emotionList = [];
        for (let key in emotions){
            emotionList.push([key, emotions[key]]);  
        }

        return (  
            <div>
                <table className="table table-bordered">
                    <tbody>
                    {emotionList.map( item => (
                        <tr>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            );
    }
    
}
export default EmotionTable;