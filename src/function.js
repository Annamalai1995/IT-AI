import './External.css'
function Orderlist()
{
    return(
        <>
        <ol>
            name
            <li>
                annamalai
            </li>
            <li>
                sathish
            </li>
        </ol>
        </>
    );

}

function Fun1()
{
    return(
        <>
        <h1>data flow</h1>
        </>
    )
}
export let Table1=()=>
{
    return(
        <>
        <table >
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Studentname</th>
                    <th>staff Name</th>
                    <th>frnds Names</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Annamalai</td>
                    <td>kumar,Maonj,Raja,Swathy</td>
                    <td>Hari</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>sathish</td>
                    <td>Santhosh,Aravind,Raj,vetri</td>
                    <td>Vicky,Dhenna</td>
                </tr>
                <tr>
                    <td>3</td>   
                    <td>Annamalai</td>
                    <td>Yuvaraj,Rajesh,Ganesh,dhinesh</td>
                    <td>Sathish,Neha</td>
                </tr>
            </tbody>
        </table>
        
        </>

    );
}
export default Fun1;
export{Orderlist};