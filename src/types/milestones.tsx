export interface ContraintsOutta {
    promise?: string[];
    result?: string[];
  };

export interface MilestoneDetails{
    milestoneName?:string;
    submitedAt?: string;
    title?: string;
    outputs?: ContraintsOutta;
    criteria?: ContraintsOutta;
    evidence?: ContraintsOutta;
    delivery?: string;
    cost?: ContraintsOutta;
    completion?: string;
}

export interface MilestoneRecapCard{
    milestoneNumber?: string;
    cost?: string;
    startedAt?: string;
    schedule?: string[];
}