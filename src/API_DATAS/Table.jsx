export const Table = ({ data }) => {
    return (
        <table border={1}>
            <tr>
                <th>User Name</th>
                <th>Date</th>
            </tr>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.Aname}</td>
                    <td>{item.Bdate}</td>
                </tr>
            ))}
        </table>
    );
};
