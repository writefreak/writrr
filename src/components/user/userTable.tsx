import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  userName?: string;
}

export function UserTable({ userName }: Props) {
  return (
    <Table>
      <TableCaption>1 of 1 record(s) </TableCaption>
      <TableHeader>
        <TableRow className="bg-[#030712] rounded-md hover:bg-[#030712]">
          <TableHead className="w-[100px]  text-white rounded-l-md text-xs md:text-sm">
            Username
          </TableHead>
          <TableHead className=" text-white text-xs md:text-sm">
            Status
          </TableHead>
          <TableHead className=" text-white text-xs md:text-sm">
            Added
          </TableHead>
          <TableHead className="text-right rounded-r-md  text-white text-xs md:text-sm ">
            Last Active
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userDetails.map((details) => (
          <TableRow key={details.id} className="select-none">
            <TableCell className="font-medium text-xs md:text-sm">
              <a href={`/user/${details.id}`}>{details.userName}</a>
            </TableCell>

            <TableCell className="text-xs md:text-sm">
              {details.access}
            </TableCell>
            <TableCell className="text-xs md:text-sm">
              {details.lastActive}
            </TableCell>
            <TableCell className="text-right text-xs md:text-sm">
              {details.dateAdded}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
const userDetails = [
  {
    id: 1,
    userName: "Alicia",
    userEmail: "alicia@gmail.com",
    lastActive: "2nd Dec, 2024",
    dateAdded: "30th Nov, 2024",
    access: "User",
  },
  {
    id: 2,
    userName: "Victor",
    userEmail: "victor2020@gmail.com",
    lastActive: "2nd Dec, 2024",
    dateAdded: "30th Nov, 2024",
    access: "User",
  },
  {
    id: 3,
    userName: "Jacoby",
    userEmail: "Jacoby2020@gmail.com",
    lastActive: "2nd Dec, 2024",
    dateAdded: "30th Nov, 2024",
    access: "User",
  },
  {
    id: 4,
    userName: "Steven",
    userEmail: "Steven2020@gmail.com",
    lastActive: "2nd Dec, 2024",
    dateAdded: "30th Nov, 2024",
    access: "User",
  },
];
