export default class DocumentIndex {
  constructor(documents) {
    this.documents = new Map();
    this.invertedIndex = new Map();

    if (documents)
      documents.forEach(({ id, content }) => this.addDocument(id, content));
  }

  get terms() {
    return Array.from(this.invertedIndex.keys());
  }

  addDocument(docId, terms) {
    // Store original document
    this.documents.set(docId, {
      terms,
      length: [...terms.values()].reduce((a, b) => a + b),
    });

    // Update inverted index
    terms.forEach((freq, term) => {
      if (!this.invertedIndex.has(term))
        this.invertedIndex.set(term, new Map());

      const docMap = this.invertedIndex.get(term);

      // Store term frequency
      docMap.set(docId, freq);
    });

    return docId;
  }
}
