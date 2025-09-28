export function slugify(text = "") {
    return text
        .toString()
        .normalize("NFD")                  // separa acentos
        .replace(/[\u0300-\u036f]/g, "")   // quita diacríticos
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")       // todo lo que no sea alfanum -> -
        .replace(/^-+|-+$/g, "");          // quitar guiones al inicio/fin
}
