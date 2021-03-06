/*
    Dimensionally extended 9-intersected model
    See https://en.wikipedia.org/wiki/DE-9IM for more details
 */
class DE9IM {
    /**
     * Create new instance of DE9IM matrix
     */
    constructor() {
        /**
         * Array representing 3x3 intersection matrix
         * @type {any[]}
         */
        this.m = new Array(9).fill(undefined);
    }

    get I2I() {
        return this.m[0];
    }

    /**
     * Set Interior To Interior intersection
     * @param geom
     */
    set I2I(geom) {
        this.m[0] = geom;
    }

    get I2B() {
        return this.m[1];
    }

    /**
     * Set Interior to Boundary intersection
     * @param geom
     */
    set I2B(geom) {
        this.m[1] = geom;
    }

    get I2E() {
        return this.m[2];
    }

    /**
     * Set Interior to Exterior intersection
     * @param geom
     */
    set I2E(geom) {
        this.m[2] = geom;
    }

    get B2I() {
        return this.m[3];
    }

    /**
     * Set Boundary to Interior intersection
     * @param geom
     */
    set B2I(geom) {
        this.m[3] = geom;
    }

    get B2B() {
        return this.m[4];
    }

    /**
     * Set Boundary to Boundary intersection
     * @param geom
     */
    set B2B(geom) {
        this.m[4] = geom;
    }

    get B2E() {
        return this.m[5];
    }

    /**
     * Set Boundary to Exterior intersection
     * @param geom
     */
    set B2E(geom) {
        this.m[5] = geom;
    }

    get E2I() {
        return this.m[6];
    }

    /**
     * Set Exterior to Interior intersection
     * @param geom
     */
    set E2I(geom) {
        this.m[6] = geom;
    }

    get E2B() {
        return this.m[7];
    }

    /**
     * Set Exterior to Boundary intersection
     * @param geom
     */
    set E2B(geom) {
        this.m[7] = geom;
    }

    get E2E() {
        return this.m[8];
    }

    /**
     * Set Exterior to Exterior intersection
     * @param geom
     */
    set E2E(geom) {
        this.m[8] = geom;
    }

    /**
     * Return de9im matrix as string where<br/>
     * - intersection is 'T'<br/>
     * - not intersected is 'F'<br/>
     * - not relevant is '*'<br/>
     * For example, string 'FF**FF****' means 'DISJOINT'
     * @returns {string}
     */
    toString() {
        return this.m.map( e => {
            if (e instanceof Array && e.length > 0) {
                return 'T'
            }
            else if (e instanceof Array && e.length === 0) {
                return 'F'
            }
            else {
                return '*'
            }
        }).join("")
    }
}

export default DE9IM;
