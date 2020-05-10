import { Component, OnInit, NgModule } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-datamgmt',
  templateUrl: './datamgmt.component.html',
  styleUrls: ['./datamgmt.component.scss']
})

export class DatamgmtComponent implements OnInit {

  dataMigration = [
    {list: 'DBMS / RDBMS'},
    {list: 'ERP'},
    {list: 'File System (TXT, XLS, CSV etc)'},
    {list: 'XML'},
    {list: 'SAP'},
    {list: 'CRM'}
  ];

  espendRequirement  = [
    {list: 'Review / Understand the Client Business and Project Scope.'},
    {list: 'Identification of spends data sources & attributes (Internal & External Sources).'},
    {list: 'Assessment for completeness of data from multiple Sources.'},
    {list: 'Review of additional Information - Frequency, Exchange rates, languages, Profit Centers / Business units Information etc.'},
    {list: 'Finalize data file templates, taxonomy / schema for classification.'},
    {list: 'Review any client / industry specific classification needs / guidelines.'},
    {list: 'Setup of the client domain in the tool with client specific information'}
  ];

  dataCollection  = [
    {list: 'Collect spend data (raw data) from various systems & sources. Coordinate discussions (if necessary) across time zones and languages'},
    {list: 'Review the completeness of data in terms of required fields, formats etc.'},
    {list: 'Work with client to setup semi-automated/automated data collection process'},
    {list: 'Create file based information summary for client review (spend numbers, records, currencies etc.)'},
    {list: 'File acceptance / rejection based on client feedback'},
    {list: 'Consolidate the data files from various templates to standard accepted template.'},
    {list: 'File upload into the tool for further data processing.'}
  ];


  dataCleansing = [
    {list: 'Review raw data files and transform data at attribute level if required.'},
    {list: 'Extract data from files and reconcile based on various data formats.'},
    {list: 'Normalize data for various attributes such as PC/BU, Company, date formats, etc.'},
    {list: 'Normalize currencies and perform currency conversion to normalize spend.'},
    {list: 'Cleanse the records from any noise (junk) characters for further processing.'},
    {list: 'Perform data validation for specific set of business rules.'},
    {list: 'Perform data clustering based on certain data attributes such as supplier name, GL description, material description, material / item group etc.'}
  ];


  classification = [
    {list: 'Memory Lookup for classification of clusters on historic intelligence.'},
    {list: 'AI based engine for supplier / item normalization, classification, and establishing corporate linkage.'},
    {list: 'Generate classification result summary based on regions, business unit, top categories, suppliers and spend amounts for sourcing expert verification.'},
    {list: 'Conduct feedback sessions with sourcing experts to finalize the spend classification.'},
    {list: 'Classifying the data into sourceable categories using the UNSPSC'},
  ];


  advancedData = [
    {list: 'Review the standard analytics report formats (measures and dimensions) and identify need for additional cubes or dimensions.'},
    {list: 'Define the format of additional analytics reports and create the analytics reports based on the OLAP data cubes.'},
    {list: 'Review the analytics reports and provide access to reports for client feedback.'},
    {list: 'Based on client feedback, incorporate any changes so as to enrich the spend data with business specific rules / information.'},
    {list: 'Reporting the analysis and findings to the decision makers within your organization.'},
    {list: 'Finalize the spend analysis reports and publish the "Spend Book"'},
  ];

  spendAnalytics = [
    {list: 'Provides insights on direct and indirect spending and business strategies'},
    {list: 'Data quality improvement & Operational efficiency'},
    {list: 'Converts raw data into knowledge capital'},
    {list: 'Rationalize and standardize products and services'},
    {list: 'Shows company spend across categories, supplier etc'},
    {list: 'Identifies savings opportunities for procurement'},
    {list: 'Consolidate spend across various business units to increase leverage in supplier negotiation'},
    {list: 'Enables strategic sourcing that helps reduce cost and maximize profits'},
    {list: 'Provides actionable insights and recommendations, which impacts the bottom line'},
    {list: 'Obtain visibility into how much money is spent with whom, on what and how'},
  ];

  obtainvisibility = [
    {list: 'Provides insights on direct and indirect spending and business strategies'},
    {list: 'Data quality improvement & Operational efficiency'},
    {list: 'Converts raw data into knowledge capital'},
    {list: 'Rationalize and standardize products and services'},
    {list: 'Shows company spend across categories, supplier etc'},
    {list: 'Identifies savings opportunities for procurement'},
    {list: 'Consolidate spend across various business units to increase leverage in supplier negotiation'},
    {list: 'Enables strategic sourcing that helps reduce cost and maximize profits'},
    {list: 'Provides actionable insights and recommendations, which impacts the bottom line'},
    {list: 'Obtain visibility into how much money is spent with whom, on what and how'}
  ];

  tabIndex;
  tabName;
  constructor(private sharedservice: SharedService) {
  }
  ngOnInit() {
    this.sharedservice.sharedMessage.subscribe(Id => this.tabIndex = Id.Id);
    this.sharedservice.sharedMessage.subscribe(Id => this.tabName = Id.name.replace(/([A-Z])/g, ' $1').trim());
  }

  title(i) {
    if (i === 1) {
      this.tabName = 'Cleanse Dataset';
    } else if (i === 2) {
      this.tabName = 'Data Mapping & Conversion';
    } else if (i === 3) {
      this.tabName = 'Data Migration & Consolidation';
    } else if (i === 4) {
      this.tabName = 'Spend Analysis';
    }
  }

}
