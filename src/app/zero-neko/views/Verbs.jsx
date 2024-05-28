import React from "react";
import H1 from "../components/H1";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Verbs = async (props) => {
  const verbs = Object.values(await import("../data/verbs.json"));

  return (
    <div className="text-center lg:mx-36">
      <div className="flex flex-col items-center justify-between">
        <H1 span={props.symbol} text={props.title} />
        <Table>
          <TableHeader>
            <TableRow className="font-semibold">
              <TableHead className="text-xl font-bold">Romaji</TableHead>
              <TableHead className="text-xl font-bold">
                Japanese script
              </TableHead>
              <TableHead className="text-xl font-bold">English</TableHead>
              <TableHead className="text-xl font-bold">Class</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {verbs.map((v) => (
              <TableRow key={v.id}>
                <TableCell className="font-medium">{v.romaji}</TableCell>
                <TableCell>
                  {v.present_indicative?.plain?.positive[0]}
                </TableCell>
                <TableCell className="text-left">
                  {v.imperative?.meaning.positive}
                </TableCell>
                <TableCell className="">{v.class}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Verbs;
