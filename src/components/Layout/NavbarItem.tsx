import {Button, Menu} from "@chakra-ui/react";
import {useRouter} from "next/router";
import Link from "next/link";
import {Category} from "@/interfaces/Category";

interface Props {
  handleClickNav: (url: string) => void;
  category: Category;
}

export const NavbarItem = ({handleClickNav, category: {id, name, url}}: Props) => {
  const router = useRouter();

  return (
    <Menu key={id}>
      <Link href={url} passHref>
        <Button
          as="a"
          variant="link"
          textDecoration={router.pathname === url ? "underline" : "none"}
          color={"white"}
          _hover={{color: "white"}}
        >
          {name}
        </Button>
      </Link>
    </Menu>
  );
};
