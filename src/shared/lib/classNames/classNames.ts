type Mods = Record<string, boolean | string>;
function classNames(cls: string, mods: Mods = {}, additional: string[] = []) {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
        ...additional.filter(Boolean)
    ].join(" ");
}

export { classNames as cn };
