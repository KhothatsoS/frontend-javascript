
export interface MajorCredits {
  credits: number;
  brand: "MajorCredits"; 
}

export interface MinorCredits {
  credits: number;
  brand: "MinorCredits"; 
}

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.cred
