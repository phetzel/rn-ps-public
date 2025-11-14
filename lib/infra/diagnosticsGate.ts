let diagnosticsEnabledInMemory = true;

export function isDiagnosticsEnabled(): boolean {
  return diagnosticsEnabledInMemory;
}

export function setDiagnosticsEnabled(enabled: boolean): void {
  diagnosticsEnabledInMemory = enabled;
}
