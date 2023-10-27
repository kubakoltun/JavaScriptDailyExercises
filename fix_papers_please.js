class Inspector {
  constructor() {
    this.bulletin = {
      allowedNations: [],
      requiredDocuments: [],
      requiredVaccinations: [],
      wantedCriminal: null,
    };
  }

  receiveBulletin(bulletinText) {
    const lines = bulletinText.split('\n');
    for (const line of lines) {
      const [directive, value] = line.split(': ');
      switch (directive) {
        case 'Allow citizens of':
          this.bulletin.allowedNations = value.split(', ');
          break;
        case 'Deny citizens of':
          this.bulletin.allowedNations = this.bulletin.allowedNations.filter(
            (nation) => !value.split(', ').includes(nation)
          );
          break;
        case 'Foreigners require':
          this.bulletin.requiredDocuments.push(value);
          break;
        case 'Citizens of Arstotzka require':
          this.bulletin.requiredDocuments.push(value);
          break;
        case 'Workers require':
          this.bulletin.requiredDocuments.push(value);
          break;
        case 'Citizens of':
          this.bulletin.requiredVaccinations.push(...value.split(', '));
          break;
        case 'Entrants no longer require':
          this.bulletin.requiredVaccinations = this.bulletin.requiredVaccinations.filter(
            (vaccination) => !value.split(', ').includes(vaccination)
          );
          break;
        case 'Wanted by the State':
          this.bulletin.wantedCriminal = value;
          break;
        default:
          break;
      }
    }
  }

  inspect(entrant) {
    if (!this.checkAllowedNation(entrant)) {
      return 'Entry denied: citizen of banned nation.';
    }

    if (!this.checkRequiredDocuments(entrant)) {
      return 'Entry denied: missing required document.';
    }

    if (!this.checkVaccinations(entrant)) {
      return 'Entry denied: missing required vaccination.';
    }

    if (this.bulletin.wantedCriminal === entrant.name) {
      return 'Detainment: Entrant is a wanted criminal.';
    }

    if (!this.checkPassportExpiration(entrant)) {
      return 'Entry denied: passport expired.';
    }

    return entrant.nation === 'Arstotzka' ? 'Glory to Arstotzka.' : 'Cause no trouble.';
  }

  checkAllowedNation(entrant) {
    return this.bulletin.allowedNations.includes(entrant.nation);
  }

  checkRequiredDocuments(entrant) {
    for (const document of this.bulletin.requiredDocuments) {
      if (!entrant[document]) {
        return false;
      }
    }
    return true;
  }

  checkVaccinations(entrant) {
    for (const vaccination of this.bulletin.requiredVaccinations) {
      if (entrant.certificate_of_vaccination && !entrant.certificate_of_vaccination.includes(vaccination)) {
        return false;
      }
    }
    return true;
  }

  checkPassportExpiration(entrant) {
    if (entrant.passport) {
      const expirationDate = entrant.passport.match(/EXP: (\d{4}.\d{2}.\d{2})/);
      if (expirationDate) {
        const today = new Date('1982-11-22');
        const passportExpDate = new Date(expirationDate[1]);
        return passportExpDate > today;
      }
    }
    return true;
  }
}
