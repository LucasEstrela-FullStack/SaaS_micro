
export function formatCurrency(value: number): string{
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
 }).format(value);
}


export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(date));
}