const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
            <div>
              <span className="text-lg font-bold">InvoiceQuick</span>
              <p className="text-sm text-muted-foreground">Simple invoicing for freelancers</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 InvoiceQuick
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;