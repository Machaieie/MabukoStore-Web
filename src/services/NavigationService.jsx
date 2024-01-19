const menu = () => {
    const menuItem = [
        {
            id: 1,
            label: "Dashboard",
            icon: "UserMultiple16",
            roles: ["ROLE_ADMIN"],
        },
        {
            id: 2,
            label: "Livros",
            icon: "UserMultiple16",
            roles: ["ROLE_ADMIN"],
            items: [
                {
                    id: 2.1,
                    label: "Registar",
                    link: "/admin/registar-utilizador",
                    roles: ["ROLE_ADMIN"],
                },
                {
                    id: 2.2,
                    label: "Consultar Livros",
                    link: "/admin/registar-utilizador",
                    roles: ["ROLE_ADMIN"],
                },
            ]
        },
        {
            id: 3,
            label: "Vendas",
            icon: "UserMultiple16",
            roles: ["ROLE_ADMIN"],
            items: [
                {
                    id: 3.1,
                    label: "Efectuar Venda",
                    link: "/admin/registar-utilizador",
                    roles: ["ROLE_ADMIN"],
                },

            ]
        },
        {
            id: 4,
            label: "Clientes",
            icon: "UserMultiple16",
            roles: ["ROLE_ADMIN"],
            items: [
                {
                    id: 4.1,
                    label: "Registar",
                    link: "/admin/registar-utilizador",
                    roles: ["ROLE_ADMIN"],
                },
                {
                    id: 4.2,
                    label: "Consultar Clientes",
                    link: "/admin/registar-utilizador",
                    roles: ["ROLE_ADMIN"],
                },
            ]
        },
        {
            id: 5,
            label: "Autores",
            icon: "UserMultiple16",
            roles: ["ROLE_ADMIN"],
            items: [
                {
                    id: 5.1,
                    label: "Registar",
                    link: "/admin/registar-utilizador",
                    roles: ["ROLE_ADMIN"],
                },
                {
                    id: 5.2,
                    label: "Consultar Autores",
                    link: "/admin/registar-utilizador",
                    roles: ["ROLE_ADMIN"],
                },
            ]
        },
        {
            id: 6,
            label: "Editoras",
            icon: "UserMultiple16",
            roles: ["ROLE_ADMIN"],
            items: [
                {
                    id: 6.1,
                    label: "Registar",
                    link: "/admin/registar-utilizador",
                    roles: ["ROLE_ADMIN"],
                },
                {
                    id: 6.2,
                    label: "Consultar Editoras",
                    link: "/admin/registar-utilizador",
                    roles: ["ROLE_ADMIN"],
                },
            ]
        },
        {
            id: 7,
            label: "Utilizadores",
            icon: "UserMultiple16",
            roles: ["ROLE_ADMIN"],
            items: [
                {
                    id: 7.1,
                    label: "Registar",
                    link: "/admin/registar-utilizador",
                    roles: ["ROLE_ADMIN"],
                },
                {
                    id: 7.2,
                    label: "Consultar Utilizadores",
                    link: "/admin/registar-utilizador",
                    roles: ["ROLE_ADMIN"],
                },
            ]
        },
    ]
    const userMenu = menuItem.filter((m) => m.roles.includes(role));
  userMenu.forEach((menu) => {
    menu.items = menu.items.filter((mi) => mi.roles.includes(role));
  });

  return userMenu;
}

export default menu;