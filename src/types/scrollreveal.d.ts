declare module 'scrollreveal' {
    interface ScrollRevealObject {
      reveal(selector: string, config?: object): void;
    }
  
    interface ScrollReveal {
      (): ScrollRevealObject;
      reveal(selector: string, config?: object): void;
    }
  
    const scrollreveal: ScrollReveal;
    export default scrollreveal;
  }
  