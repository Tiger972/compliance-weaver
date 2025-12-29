import { Shield, CheckCircle, AlertTriangle, Activity, Cloud, Lock } from "lucide-react";

const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Background glow effect */}
      <div className="absolute inset-0 gradient-primary opacity-10 blur-3xl rounded-full" />

      {/* Main dashboard card */}
      <div className="relative glass rounded-2xl shadow-glass-lg p-6 float">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">COMPLIO Dashboard</h3>
              <p className="text-xs text-muted-foreground">ISO 27001 Compliance</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <Cloud className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">AWS Connected</span>
          </div>
        </div>

        {/* Compliance Score */}
        <div className="bg-secondary/50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Score de conformité</span>
            <span className="text-2xl font-bold text-cyber-green">68%</span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div className="bg-cyber-green h-2 rounded-full" style={{ width: "94%" }} />
          </div>
        </div>

        {/* Controls grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-background rounded-lg p-3 border border-border">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-4 h-4 text-cyber-green" />
              <span className="text-xs font-medium text-foreground">Contrôles OK</span>
            </div>
            <span className="text-lg font-bold text-foreground">127</span>
          </div>
          <div className="bg-background rounded-lg p-3 border border-border">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-medium text-foreground">À corriger</span>
            </div>
            <span className="text-lg font-bold text-foreground">8</span>
          </div>
          <div className="bg-background rounded-lg p-3 border border-border">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-foreground">En cours</span>
            </div>
            <span className="text-lg font-bold text-foreground">3</span>
          </div>
        </div>

        {/* Recent scans */}
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-cyber-green/10 rounded-lg border border-cyber-green/20">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyber-green" />
              <span className="text-xs font-medium text-foreground">A.9 Access Control</span>
            </div>
            <span className="text-xs text-cyber-green font-medium">Conforme</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-cyber-green/10 rounded-lg border border-cyber-green/20">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyber-green" />
              <span className="text-xs font-medium text-foreground">A.12 Operations Security</span>
            </div>
            <span className="text-xs text-cyber-green font-medium">Conforme</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-medium text-foreground">A.18 Compliance</span>
            </div>
            <span className="text-xs text-amber-500 font-medium">2 actions</span>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-glass float-delay-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-cyber-green rounded-full pulse-glow" />
          <span className="text-xs font-medium text-foreground">Scan en cours...</span>
        </div>
      </div>

      <div className="absolute -bottom-2 -left-4 glass rounded-xl p-3 shadow-glass float-delay-2">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-cyber-green" />
          <span className="text-xs font-medium text-foreground">Dernier audit: il y a 2h</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
