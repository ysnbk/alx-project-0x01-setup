import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, username, address, id, phone,website,company }) => {
  return (
    <ul className="max-w-xl mx-auto my-6 p-6 bg-gray-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <li>{id}:{name}({username}) email:{email}</li>
        <li>{address.suite},{address.city},{address.zipcode}</li>
        <li>{phone}</li>
        <li>{company.name}</li>
        <li>{website}</li>
        
    </ul>
  );
};

export default UserCard;