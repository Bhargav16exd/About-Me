// ─── PROMINENT INFRA ART COMPONENTS ───────────────────────────────────────────
// All SVGs are monochrome (white with opacity) to match the B&W Vercel theme.

// ── 1. FULL SERVER RACK ────────────────────────────────────────────────────────
export function ServerRack({ className = '' }) {
  const units = [
    { h: 16, type: 'server',  label: 'WEB-01',   leds: [1,1,0,1] },
    { h: 16, type: 'server',  label: 'API-02',   leds: [1,1,1,0] },
    { h: 10, type: 'blank' },
    { h: 30, type: 'switch',  label: 'SW-48G' },
    { h: 10, type: 'blank' },
    { h: 32, type: 'storage', label: 'NAS-01' },
    { h: 10, type: 'blank' },
    { h: 48, type: 'compute', label: 'GPU-NODE' },
    { h: 16, type: 'server',  label: 'DB-01',    leds: [1,0,1,1] },
    { h: 10, type: 'blank' },
    { h: 16, type: 'pdu',     label: 'PDU-A' },
  ]

  let y = 12
  const rendered = units.map((u, i) => {
    const cy = y
    y += u.h + 2
    return { ...u, cy, i }
  })

  return (
    <svg viewBox="0 0 220 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Rack frame */}
      <rect x="4" y="4" width="212" height="352" rx="3" stroke="white" strokeWidth="0.8" strokeOpacity="0.18"/>
      {/* Side rails */}
      <rect x="4" y="4" width="12" height="352" fill="white" fillOpacity="0.025" stroke="white" strokeOpacity="0.1" strokeWidth="0.4"/>
      <rect x="204" y="4" width="12" height="352" fill="white" fillOpacity="0.025" stroke="white" strokeOpacity="0.1" strokeWidth="0.4"/>
      {/* Rail holes */}
      {Array.from({length:20}).map((_,i)=>(
        <g key={i}>
          <rect x="7" y={16+i*16} width="5" height="4" rx="0.5" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.1" strokeWidth="0.3"/>
          <rect x="208" y={16+i*16} width="5" height="4" rx="0.5" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.1" strokeWidth="0.3"/>
        </g>
      ))}

      {rendered.map(u => {
        if (u.type === 'blank') return (
          <rect key={u.i} x="16" y={u.cy} width="188" height={u.h} rx="1"
            fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="0.4" strokeDasharray="3 3"/>
        )
        if (u.type === 'server') return (
          <g key={u.i}>
            <rect x="16" y={u.cy} width="188" height={u.h} rx="1.5"
              fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.16" strokeWidth="0.5"/>
            <text x="22" y={u.cy+10} fill="white" fillOpacity="0.22" fontSize="5.5" fontFamily="monospace">{u.label}</text>
            {/* Drive bays */}
            {Array.from({length:5}).map((_,j)=>(
              <rect key={j} x={55+j*14} y={u.cy+3} width="10" height={u.h-6} rx="0.5"
                fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" strokeWidth="0.35"/>
            ))}
            {/* LEDs */}
            {(u.leds||[1,0,1,1]).map((on,j)=>(
              <circle key={j} cx={170+j*7} cy={u.cy+8} r="1.8"
                fill="white" fillOpacity={on?0.45:0.08} className={on?'led':''}/>
            ))}
            {/* Power btn */}
            <circle cx="196" cy={u.cy+8} r="3" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.2" strokeWidth="0.4"/>
            <circle cx="196" cy={u.cy+8} r="1.5" fill="white" fillOpacity="0.12"/>
          </g>
        )
        if (u.type === 'switch') return (
          <g key={u.i}>
            <rect x="16" y={u.cy} width="188" height={u.h} rx="1.5"
              fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.16" strokeWidth="0.5"/>
            <text x="22" y={u.cy+9} fill="white" fillOpacity="0.22" fontSize="5.5" fontFamily="monospace">{u.label}</text>
            {/* 24 ports top row */}
            {Array.from({length:12}).map((_,j)=>(
              <g key={j}>
                <rect x={44+j*11} y={u.cy+3} width="8" height="10" rx="0.8"
                  fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.12" strokeWidth="0.35"/>
                <circle cx={48+j*11} cy={u.cy+7} r="1.2"
                  fill="white" fillOpacity={Math.random()>0.35?0.35:0.08} className="led"/>
              </g>
            ))}
            {/* bottom row */}
            {Array.from({length:12}).map((_,j)=>(
              <g key={j}>
                <rect x={44+j*11} y={u.cy+16} width="8" height="10" rx="0.8"
                  fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.12" strokeWidth="0.35"/>
                <circle cx={48+j*11} cy={u.cy+20} r="1.2"
                  fill="white" fillOpacity={Math.random()>0.45?0.3:0.06}/>
              </g>
            ))}
            {/* SFP+ */}
            {[0,1,2,3].map(j=>(
              <rect key={j} x={178+j>3?178:178} y={u.cy+3} width="0" height="0" rx="0"/>
            ))}
          </g>
        )
        if (u.type === 'storage') return (
          <g key={u.i}>
            <rect x="16" y={u.cy} width="188" height={u.h} rx="1.5"
              fill="white" fillOpacity="0.035" stroke="white" strokeOpacity="0.14" strokeWidth="0.5"/>
            <text x="22" y={u.cy+9} fill="white" fillOpacity="0.22" fontSize="5.5" fontFamily="monospace">{u.label}</text>
            {/* Drive slots 2x4 */}
            {Array.from({length:4}).map((_,col)=>
              Array.from({length:2}).map((_,row)=>(
                <g key={`${col}-${row}`}>
                  <rect x={44+col*34} y={u.cy+3+row*13} width="30" height="11" rx="1"
                    fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.12" strokeWidth="0.4"/>
                  <rect x={46+col*34} y={u.cy+5+row*13} width="8" height="7" rx="0.5"
                    fill="white" fillOpacity="0.08"/>
                  <line x1={56+col*34} y1={u.cy+6+row*13} x2={72+col*34} y2={u.cy+6+row*13}
                    stroke="white" strokeOpacity="0.12" strokeWidth="0.4"/>
                  <line x1={56+col*34} y1={u.cy+9+row*13} x2={72+col*34} y2={u.cy+9+row*13}
                    stroke="white" strokeOpacity="0.08" strokeWidth="0.4"/>
                </g>
              ))
            )}
            {[0,1,2].map(j=>(
              <circle key={j} cx={184+j*6>210?184:184+0} cy={u.cy+16} r="1.5"
                fill="white" fillOpacity={j===0?0.4:0.1} className={j===0?'led':''}/>
            ))}
          </g>
        )
        if (u.type === 'compute') return (
          <g key={u.i}>
            <rect x="16" y={u.cy} width="188" height={u.h} rx="1.5"
              fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.18" strokeWidth="0.6"/>
            <text x="22" y={u.cy+10} fill="white" fillOpacity="0.25" fontSize="5.5" fontFamily="monospace">{u.label}</text>
            {/* 4 GPU cards */}
            {Array.from({length:4}).map((_,j)=>(
              <g key={j}>
                <rect x={44+j*37} y={u.cy+4} width="33" height={u.h-8} rx="1"
                  fill="white" fillOpacity="0.045" stroke="white" strokeOpacity="0.14" strokeWidth="0.4"/>
                {/* GPU die */}
                <rect x={48+j*37} y={u.cy+8} width="20" height="18" rx="0.5"
                  fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" strokeWidth="0.3"/>
                {Array.from({length:3}).map((_,r)=>(
                  <line key={r} x1={48+j*37} y1={u.cy+11+r*4} x2={68+j*37} y2={u.cy+11+r*4}
                    stroke="white" strokeOpacity="0.07" strokeWidth="0.3"/>
                ))}
                {/* Heatsink fins */}
                {Array.from({length:5}).map((_,f)=>(
                  <line key={f} x1={49+j*37+f*4} y1={u.cy+28} x2={49+j*37+f*4} y2={u.cy+40}
                    stroke="white" strokeOpacity="0.1" strokeWidth="0.6"/>
                ))}
                <circle cx={72+j*37} cy={u.cy+10} r="1.5"
                  fill="white" fillOpacity="0.3" className="led-fast"/>
              </g>
            ))}
          </g>
        )
        if (u.type === 'pdu') return (
          <g key={u.i}>
            <rect x="16" y={u.cy} width="188" height={u.h} rx="1.5"
              fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.14" strokeWidth="0.5"/>
            <text x="22" y={u.cy+10} fill="white" fillOpacity="0.22" fontSize="5.5" fontFamily="monospace">{u.label}</text>
            {Array.from({length:10}).map((_,j)=>(
              <circle key={j} cx={52+j*14} cy={u.cy+8} r="3"
                fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.12" strokeWidth="0.35"/>
            ))}
          </g>
        )
        return null
      })}

      {/* Cables hanging bottom */}
      {[0,1,2,3,4].map(i=>(
        <path key={i}
          d={`M ${28+i*20} 355 Q ${30+i*20} 365 ${24+i*22} 370`}
          stroke="white" strokeOpacity="0.07" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      ))}
    </svg>
  )
}

// ── 2. DATACENTER FLOOR PLAN (top-down) ───────────────────────────────────────
export function DatacenterFloor({ className = '' }) {
  const rows = [
    { x: 10,  y: 20,  w: 60, h: 120, racks: 6 },
    { x: 80,  y: 20,  w: 60, h: 120, racks: 6 },
    { x: 150, y: 20,  w: 60, h: 120, racks: 6 },
    { x: 220, y: 20,  w: 60, h: 120, racks: 6 },
    { x: 10,  y: 170, w: 60, h: 120, racks: 6 },
    { x: 80,  y: 170, w: 60, h: 120, racks: 6 },
    { x: 150, y: 170, w: 60, h: 120, racks: 6 },
    { x: 220, y: 170, w: 60, h: 120, racks: 6 },
  ]

  return (
    <svg viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Floor grid */}
      {Array.from({length:20}).map((_,i)=>(
        <line key={`h${i}`} x1="0" y1={i*16} x2="300" y2={i*16} stroke="white" strokeOpacity="0.03" strokeWidth="0.4"/>
      ))}
      {Array.from({length:20}).map((_,i)=>(
        <line key={`v${i}`} x1={i*16} y1="0" x2={i*16} y2="320" stroke="white" strokeOpacity="0.03" strokeWidth="0.4"/>
      ))}

      {/* Hot/cold aisle markers */}
      <text x="73" y="142" fill="white" fillOpacity="0.1" fontSize="5" fontFamily="monospace" textAnchor="middle">HOT AISLE</text>
      <text x="73" y="168" fill="white" fillOpacity="0.1" fontSize="5" fontFamily="monospace" textAnchor="middle">COLD AISLE</text>
      <text x="213" y="142" fill="white" fillOpacity="0.1" fontSize="5" fontFamily="monospace" textAnchor="middle">HOT AISLE</text>
      <text x="213" y="168" fill="white" fillOpacity="0.1" fontSize="5" fontFamily="monospace" textAnchor="middle">COLD AISLE</text>

      {/* Rack rows */}
      {rows.map((row,ri)=>(
        <g key={ri}>
          <rect x={row.x} y={row.y} width={row.w} height={row.h} rx="2"
            fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.12" strokeWidth="0.5"/>
          {/* Individual rack units */}
          {Array.from({length:row.racks}).map((_,rk)=>(
            <g key={rk}>
              <rect x={row.x+2} y={row.y+2+rk*19} width={row.w-4} height="16" rx="1"
                fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.09" strokeWidth="0.3"/>
              {/* Activity dots */}
              {[0,1,2].map(d=>(
                <circle key={d} cx={row.x+row.w-8-d*5} cy={row.y+10+rk*19} r="1.2"
                  fill="white" fillOpacity={Math.random()>0.4?0.3:0.07}/>
              ))}
            </g>
          ))}
        </g>
      ))}

      {/* Overhead cable trays */}
      <line x1="70" y1="20" x2="70" y2="300" stroke="white" strokeOpacity="0.06" strokeWidth="2" strokeDasharray="4 3"/>
      <line x1="140" y1="20" x2="140" y2="300" stroke="white" strokeOpacity="0.06" strokeWidth="2" strokeDasharray="4 3"/>
      <line x1="210" y1="20" x2="210" y2="300" stroke="white" strokeOpacity="0.06" strokeWidth="2" strokeDasharray="4 3"/>

      {/* Data flow arrows on cable trays */}
      {[80,140,200,260].map((y,i)=>(
        <polygon key={i} points={`68,${y} 72,${y-4} 72,${y+4}`} fill="white" fillOpacity="0.12"/>
      ))}

      {/* Network core switch in center */}
      <rect x="118" y="140" width="64" height="30" rx="2"
        fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.2" strokeWidth="0.6"/>
      <text x="150" y="152" textAnchor="middle" fill="white" fillOpacity="0.3" fontSize="5" fontFamily="monospace">CORE-SW</text>
      <text x="150" y="162" textAnchor="middle" fill="white" fillOpacity="0.18" fontSize="4" fontFamily="monospace">100GbE</text>

      {/* Connections from core to rows */}
      {[[40,80],[110,80],[110,210],[40,210],[185,80],[255,80],[255,210],[185,210]].map(([cx,cy],i)=>(
        <line key={i} x1="150" y1="155" x2={cx} y2={cy}
          stroke="white" strokeOpacity="0.07" strokeWidth="0.5" strokeDasharray="3 2"/>
      ))}

      {/* Legend */}
      <text x="150" y="305" textAnchor="middle" fill="white" fillOpacity="0.12" fontSize="5" fontFamily="monospace">DATACENTER · ZONE A</text>
    </svg>
  )
}

// ── 3. NETWORK TOPOLOGY DIAGRAM ────────────────────────────────────────────────
export function NetworkTopology({ className = '' }) {
  const nodes = [
    { id:'internet', x:160, y:18,  label:'INTERNET', shape:'cloud' },
    { id:'fw',       x:160, y:62,  label:'FIREWALL' },
    { id:'lb',       x:160, y:108, label:'LOAD BALANCER' },
    { id:'sw1',      x:80,  y:155, label:'SW-CORE-1' },
    { id:'sw2',      x:240, y:155, label:'SW-CORE-2' },
    { id:'web1',     x:40,  y:205, label:'WEB-01' },
    { id:'web2',     x:120, y:205, label:'WEB-02' },
    { id:'api1',     x:200, y:205, label:'API-01' },
    { id:'api2',     x:280, y:205, label:'API-02' },
    { id:'db1',      x:80,  y:255, label:'DB-PRI' },
    { id:'db2',      x:240, y:255, label:'DB-REP' },
    { id:'storage',  x:160, y:255, label:'NAS' },
  ]

  const edges = [
    ['internet','fw'],['fw','lb'],
    ['lb','sw1'],['lb','sw2'],
    ['sw1','web1'],['sw1','web2'],['sw1','db1'],
    ['sw2','api1'],['sw2','api2'],['sw2','db2'],
    ['sw1','sw2'], // cross-link
    ['db1','storage'],['db2','storage'],
  ]

  const nodeMap = Object.fromEntries(nodes.map(n=>[n.id,n]))

  return (
    <svg viewBox="0 0 320 290" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Edges */}
      {edges.map(([a,b],i)=>{
        const na=nodeMap[a], nb=nodeMap[b]
        const isCore = a==='sw1'&&b==='sw2'
        return (
          <line key={i}
            x1={na.x} y1={na.y+9} x2={nb.x} y2={nb.y-3}
            stroke="white"
            strokeOpacity={isCore?0.2:0.1}
            strokeWidth={isCore?1.2:0.6}
            strokeDasharray={isCore?"none":"3 2"}
          />
        )
      })}

      {/* Nodes */}
      {nodes.map(n=>{
        const isCore = n.id==='sw1'||n.id==='sw2'||n.id==='lb'||n.id==='fw'
        return (
          <g key={n.id}>
            <rect
              x={n.x-32} y={n.y-8} width="64" height="18" rx="2"
              fill="white" fillOpacity={isCore?0.07:0.04}
              stroke="white" strokeOpacity={isCore?0.22:0.12} strokeWidth={isCore?0.7:0.45}
            />
            <text x={n.x} y={n.y+5.5} textAnchor="middle"
              fill="white" fillOpacity={isCore?0.35:0.2} fontSize="4.5" fontFamily="monospace">
              {n.label}
            </text>
            {/* Activity LED */}
            <circle cx={n.x+26} cy={n.y-2} r="1.5"
              fill="white" fillOpacity={isCore?0.5:0.2} className={isCore?'led':''}/>
          </g>
        )
      })}

      {/* Bandwidth labels on main links */}
      <text x="145" y="38" fill="white" fillOpacity="0.14" fontSize="4" fontFamily="monospace">10G</text>
      <text x="145" y="88" fill="white" fillOpacity="0.14" fontSize="4" fontFamily="monospace">10G</text>
      <text x="155" y="134" fill="white" fillOpacity="0.14" fontSize="4" fontFamily="monospace">40G</text>
      <text x="158" y="180" fill="white" fillOpacity="0.14" fontSize="4" fontFamily="monospace">100G</text>
    </svg>
  )
}

// ── 4. GPU / CPU CHIP DIE ──────────────────────────────────────────────────────
export function ChipDie({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Package */}
      <rect x="30" y="30" width="140" height="140" rx="4"
        fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.2" strokeWidth="0.8"/>
      {/* Die shadow */}
      <rect x="40" y="40" width="120" height="120" rx="2"
        fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.12" strokeWidth="0.5"/>

      {/* Internal grid lines */}
      {Array.from({length:6}).map((_,i)=>(
        <line key={`h${i}`} x1="40" y1={52+i*18} x2="160" y2={52+i*18}
          stroke="white" strokeOpacity="0.05" strokeWidth="0.4"/>
      ))}
      {Array.from({length:6}).map((_,i)=>(
        <line key={`v${i}`} x1={52+i*18} y1="40" x2={52+i*18} y2="160"
          stroke="white" strokeOpacity="0.05" strokeWidth="0.4"/>
      ))}

      {/* Functional blocks */}
      {/* Compute cores - 3x3 */}
      {Array.from({length:3}).map((_,r)=>
        Array.from({length:3}).map((_,c)=>(
          <rect key={`core-${r}-${c}`}
            x={43+c*20} y={43+r*20} width="16" height="16" rx="1"
            fill="white" fillOpacity={0.04+(r+c)%2*0.02}
            stroke="white" strokeOpacity="0.1" strokeWidth="0.35"/>
        ))
      )}

      {/* Cache block */}
      <rect x="103" y="43" width="54" height="35" rx="1"
        fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.12" strokeWidth="0.4"/>
      <text x="130" y="58" textAnchor="middle" fill="white" fillOpacity="0.2" fontSize="5" fontFamily="monospace">L3 CACHE</text>
      {Array.from({length:5}).map((_,i)=>(
        <line key={i} x1="105" y1={47+i*5} x2="155" y2={47+i*5}
          stroke="white" strokeOpacity="0.07" strokeWidth="0.3"/>
      ))}

      {/* Memory controller */}
      <rect x="43" y="103" width="54" height="20" rx="1"
        fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.12" strokeWidth="0.4"/>
      <text x="70" y="116" textAnchor="middle" fill="white" fillOpacity="0.2" fontSize="4.5" fontFamily="monospace">MEM CTRL</text>

      {/* PCIe lanes */}
      <rect x="103" y="103" width="54" height="20" rx="1"
        fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.12" strokeWidth="0.4"/>
      <text x="130" y="116" textAnchor="middle" fill="white" fillOpacity="0.2" fontSize="4.5" fontFamily="monospace">PCIe 5.0</text>

      {/* I/O block bottom */}
      <rect x="43" y="130" width="114" height="26" rx="1"
        fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" strokeWidth="0.35"/>
      <text x="100" y="146" textAnchor="middle" fill="white" fillOpacity="0.18" fontSize="4.5" fontFamily="monospace">I/O · NETWORK · USB · SATA</text>

      {/* Pins - all 4 sides */}
      {Array.from({length:12}).map((_,i)=>(
        <g key={i}>
          <rect x={38+i*10} y="20" width="4" height="10" rx="0.5" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.15" strokeWidth="0.3"/>
          <rect x={38+i*10} y="170" width="4" height="10" rx="0.5" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.15" strokeWidth="0.3"/>
          <rect x="20" y={38+i*10} width="10" height="4" rx="0.5" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.15" strokeWidth="0.3"/>
          <rect x="170" y={38+i*10} width="10" height="4" rx="0.5" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.15" strokeWidth="0.3"/>
        </g>
      ))}

      {/* Corner notch */}
      <path d="M30 46 L46 30 L30 30 Z" fill="white" fillOpacity="0.06"/>

      {/* Center label */}
      <text x="100" y="195" textAnchor="middle" fill="white" fillOpacity="0.12" fontSize="5" fontFamily="monospace">COMPUTE · GPU</text>
    </svg>
  )
}

// ── 5. PCB BOARD WITH TRACES ───────────────────────────────────────────────────
export function PcbBoard({ className = '' }) {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="0" y="0" width="400" height="260" rx="6"
        fill="white" fillOpacity="0.015" stroke="white" strokeOpacity="0.07" strokeWidth="0.6"/>

      {/* Mounting holes */}
      {[[12,12],[388,12],[12,248],[388,248]].map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x} cy={y} r="5" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.1" strokeWidth="0.5"/>
          <circle cx={x} cy={y} r="2" fill="white" fillOpacity="0.06"/>
        </g>
      ))}

      {/* Main bus traces */}
      <path d="M0 50 H80 V30 H200 V50 H400" stroke="white" strokeOpacity="0.07" strokeWidth="1.2" fill="none"/>
      <path d="M0 80 H60 V100 H180 V80 H400" stroke="white" strokeOpacity="0.06" strokeWidth="0.8" fill="none"/>
      <path d="M0 130 H100 V110 H280 V130 H400" stroke="white" strokeOpacity="0.06" strokeWidth="0.8" fill="none"/>
      <path d="M0 160 H70 V180 H230 V160 H400" stroke="white" strokeOpacity="0.05" strokeWidth="0.6" fill="none"/>
      <path d="M0 200 H50 V220 H160 V200 H400" stroke="white" strokeOpacity="0.05" strokeWidth="0.6" fill="none"/>

      {/* Vertical traces */}
      <path d="M80 0 V50 M80 50 V130 M80 130 V260" stroke="white" strokeOpacity="0.04" strokeWidth="0.6" fill="none"/>
      <path d="M180 0 V30 M180 80 V260" stroke="white" strokeOpacity="0.04" strokeWidth="0.6" fill="none"/>
      <path d="M300 0 V130 M300 160 V260" stroke="white" strokeOpacity="0.04" strokeWidth="0.6" fill="none"/>

      {/* Vias */}
      {[[80,50],[200,30],[60,100],[180,100],[100,110],[280,110],[70,180],[230,180],[50,220],[160,220],[80,130],[300,130]].map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.18" strokeWidth="0.5"/>
          <circle cx={x} cy={y} r="1.8" fill="white" fillOpacity="0.12"/>
        </g>
      ))}

      {/* ICs */}
      <g>
        <rect x="120" y="40" width="60" height="40" rx="2" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.15" strokeWidth="0.5"/>
        <text x="150" y="58" textAnchor="middle" fill="white" fillOpacity="0.25" fontSize="6" fontFamily="monospace">MCU</text>
        <text x="150" y="70" textAnchor="middle" fill="white" fillOpacity="0.14" fontSize="4.5" fontFamily="monospace">CTRL-01</text>
        {Array.from({length:4}).map((_,i)=>(
          <g key={i}>
            <rect x={124+i*14} y="36" width="4" height="5" rx="0.5" fill="white" fillOpacity="0.1"/>
            <rect x={124+i*14} y="79" width="4" height="5" rx="0.5" fill="white" fillOpacity="0.1"/>
          </g>
        ))}
        {Array.from({length:3}).map((_,i)=>(
          <g key={i}>
            <rect x="116" y={46+i*11} width="5" height="4" rx="0.5" fill="white" fillOpacity="0.1"/>
            <rect x="179" y={46+i*11} width="5" height="4" rx="0.5" fill="white" fillOpacity="0.1"/>
          </g>
        ))}
      </g>

      {/* PHY chip */}
      <g>
        <rect x="240" y="60" width="50" height="35" rx="2" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.13" strokeWidth="0.5"/>
        <text x="265" y="76" textAnchor="middle" fill="white" fillOpacity="0.22" fontSize="5.5" fontFamily="monospace">PHY</text>
        <text x="265" y="87" textAnchor="middle" fill="white" fillOpacity="0.13" fontSize="4" fontFamily="monospace">10GbE</text>
      </g>

      {/* Capacitors row */}
      {Array.from({length:6}).map((_,i)=>(
        <g key={i}>
          <ellipse cx={30+i*22} cy="145" rx="4" ry="7"
            fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="0.4"/>
          <line x1={30+i*22} y1="138" x2={30+i*22} y2="152"
            stroke="white" strokeOpacity="0.12" strokeWidth="0.3"/>
        </g>
      ))}

      {/* Ethernet port */}
      <rect x="330" y="100" width="40" height="28" rx="2"
        fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.15" strokeWidth="0.5"/>
      <text x="350" y="112" textAnchor="middle" fill="white" fillOpacity="0.2" fontSize="5" fontFamily="monospace">RJ-45</text>
      {Array.from({length:8}).map((_,i)=>(
        <rect key={i} x={332+i*4.2} y="116" width="2.5" height="10" rx="0.3"
          fill="white" fillOpacity="0.1"/>
      ))}

      {/* SFP slot */}
      <rect x="330" y="150" width="40" height="18" rx="1.5"
        fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.14" strokeWidth="0.5"/>
      <text x="350" y="162" textAnchor="middle" fill="white" fillOpacity="0.2" fontSize="5" fontFamily="monospace">SFP+</text>

      {/* Silkscreen labels */}
      <text x="18" y="195" fill="white" fillOpacity="0.1" fontSize="5" fontFamily="monospace">REV 2.1</text>
      <text x="200" y="250" textAnchor="middle" fill="white" fillOpacity="0.1" fontSize="5" fontFamily="monospace">NETWORK INTERFACE CARD · PCB</text>
    </svg>
  )
}

// ── 6. CABLE BUNDLE ────────────────────────────────────────────────────────────
export function CableBundle({ className = '' }) {
  const cables = [
    {x1:10,y1:0,  cx1:15, cy1:80,  cx2:30,  cy2:140, x2:20,  y2:200, w:2.5},
    {x1:30,y1:0,  cx1:25, cy1:60,  cx2:40,  cy2:130, x2:50,  y2:200, w:2.5},
    {x1:50,y1:0,  cx1:60, cy1:70,  cx2:50,  cy2:140, x2:35,  y2:200, w:2},
    {x1:70,y1:0,  cx1:80, cy1:90,  cx2:70,  cy2:150, x2:65,  y2:200, w:2},
    {x1:90,y1:0,  cx1:85, cy1:75,  cx2:90,  cy2:145, x2:80,  y2:200, w:3},
    {x1:110,y1:0, cx1:105,cy1:65,  cx2:100, cy2:135, x2:95,  y2:200, w:2},
  ]
  return (
    <svg viewBox="0 0 120 210" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {cables.map((c,i)=>(
        <g key={i}>
          {/* RJ45 plug top */}
          <rect x={c.x1-5} y="-4" width="10" height="14" rx="1.5"
            fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.16" strokeWidth="0.4"/>
          <rect x={c.x1-3} y="-2" width="6" height="8" rx="0.5"
            fill="white" fillOpacity="0.08"/>
          {[0,1,2,3].map(w=>(
            <rect key={w} x={c.x1-2.5+w*1.4} y="-1" width="0.7" height="6"
              fill="white" fillOpacity="0.14"/>
          ))}
          {/* Cable path */}
          <path
            d={`M ${c.x1} 10 C ${c.cx1} ${c.cy1} ${c.cx2} ${c.cy2} ${c.x2} 196`}
            stroke="white" strokeOpacity={0.06+(i%3)*0.02} strokeWidth={c.w}
            fill="none" strokeLinecap="round"/>
          {/* RJ45 plug bottom */}
          <rect x={c.x2-5} y="194" width="10" height="14" rx="1.5"
            fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.16" strokeWidth="0.4"/>
          {[0,1,2,3].map(w=>(
            <rect key={w} x={c.x2-2.5+w*1.4} y="195" width="0.7" height="6"
              fill="white" fillOpacity="0.14"/>
          ))}
        </g>
      ))}
      {/* Cable tie */}
      <ellipse cx="60" cy="100" rx="38" ry="5" stroke="white" strokeOpacity="0.12" strokeWidth="1" fill="none"/>
      <line x1="60" y1="95" x2="60" y2="105" stroke="white" strokeOpacity="0.1" strokeWidth="0.5"/>
    </svg>
  )
}

// ── 7. TERMINAL / CLI ──────────────────────────────────────────────────────────
export function TerminalBlock({ lines = [], className = '' }) {
  return (
    <svg viewBox={`0 0 340 ${30 + lines.length * 18}`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Window chrome */}
      <rect x="0" y="0" width="340" height={30 + lines.length * 18} rx="6"
        fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.14" strokeWidth="0.6"/>
      {/* Title bar */}
      <rect x="0" y="0" width="340" height="22" rx="6"
        fill="white" fillOpacity="0.04"/>
      <rect x="0" y="16" width="340" height="6"
        fill="white" fillOpacity="0.04"/>
      {/* Traffic lights */}
      <circle cx="12" cy="11" r="4" fill="white" fillOpacity="0.08"/>
      <circle cx="24" cy="11" r="4" fill="white" fillOpacity="0.08"/>
      <circle cx="36" cy="11" r="4" fill="white" fillOpacity="0.08"/>
      {/* Title */}
      <text x="170" y="15" textAnchor="middle" fill="white" fillOpacity="0.2" fontSize="6" fontFamily="monospace">bash — bhargav@infra-01</text>
      {/* Terminal content */}
      {lines.map((line, i) => (
        <text key={i} x="10" y={36 + i * 18}
          fill="white" fillOpacity={line.startsWith('$') ? 0.35 : line.startsWith('#') ? 0.18 : 0.22}
          fontSize="7.5" fontFamily="monospace">
          {line}
        </text>
      ))}
      {/* Cursor */}
      <rect x="10" y={22 + lines.length * 18} width="6" height="10"
        fill="white" fillOpacity="0.3" className="led-fast"/>
    </svg>
  )
}
