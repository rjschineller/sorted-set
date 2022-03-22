export default class SortedSet {
    length: number | undefined;
    private _level!: number;
    private _map: any;
    key!: string | null;
    value: any;
    next: any[] = [];
    prev: null | undefined;
    private _head: any;
    private _tail: any;
    
    constructor() {
        if(!(this instanceof SortedSet)) {
            return new SortedSet();
        }
        this.length = 0;
        this._level = 1;
        this._map = Object.create(null);
        this._head = this.node(32, null, 0);
        this._tail = null;
    }

    private node(level: number, key: string | null, value: number) {
        this.key = key;
        this.value = value;
        this.next = new Array(level);
        this.prev = null;
    };

    private _first (min: number): any {
        var next;
        var node = this._tail;

        if (!node || node.value < min) {
            return null;
        }

        node = this._head;
        for (let i = this._level - 1, next = null; i >= 0; i -= 1) {
            while ((next = node.next[i].next) && next.value < min) {
            node = next;
            }
        }

        return node.next[0].next;
    }

    private _get (index: number): any {
        var i;
        var node = this._head;
        var distance = -1;
      
        for (i = this._level - 1; i >= 0; i -= 1) {
          while (node.next[i].next && (distance + node.next[i].span) <= index) {
            distance += node.next[i].span;
            node = node.next[i].next;
          }
          if (distance === index) {
            return node;
          }
        }
        return null;
    }

}