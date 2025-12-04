export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
      <h1 className="text-3xl font-bold">Página no encontrada</h1>
      <p className="text-muted-foreground max-w-md">
        No pudimos encontrar la página que buscas. Verifica la URL o vuelve al inicio.
      </p>
      <a href="/" className="inline-flex items-center rounded-md border border-gold px-4 py-2 text-gold hover:bg-gold/10">
        Volver al inicio
      </a>
    </div>
  )
}
