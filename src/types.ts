interface ExpressPDFOptions {
  disposition?: 'inline' | 'attachment';
  filename?: string;
  browserOptions?: import('puppeteer').LaunchOptions;
  errorBody?: any;
  pdfOptions?: import('puppeteer').PDFOptions;
  waitForNetworkIdle?: boolean;
}

type ExpressHTMLToPDFMiddleware = (
  request: import('express').Request,
  response: import('express').Response,
  next: import('express').NextFunction
) => void;

declare namespace Express {
  interface Response {
    pdf: (html: string, options?: ExpressPDFOptions) => Promise<this>;
  }
}
