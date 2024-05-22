class SitesMetadata {
    constructor(
        private style: string = ''
    ) {

    }

    public setStyle( style: string ): void {
        this.style = style;
    }

    public getStyle(): string {
        return this.style;
    }
}

export default class SitesCache {
    public static metadata: SitesMetadata = new SitesMetadata()
}

