    import { useEffect, useState } from "react";
    
    export default function UserSearch() {
    // 1) ניהול State
    const [users, setUsers] = useState([]);      
    const [search, setSearch] = useState("");     
    const [loading, setLoading] = useState(true); 
    
    // 2) טעינת נתונים פעם אחת בלבד
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            setTimeout(() => {
            setUsers(data);
            setLoading(false);
            }, 300);
        })
        .catch((err) => {
            console.error("Failed fetching users:", err);
            setLoading(false);
        });
    }, []);
    
    const filteredUsers = users.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
    <div>
    <input
            type="text"
            placeholder="חיפוש לפי שם"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    
        {loading ? (
    <p>...טוען נתונים</p>
        ) : (
    <ul>
            {filteredUsers.map((u) => (
    <li key={u.id}>{u.name}</li>
            ))}
    </ul>
        )}
    </div>
    );
    }