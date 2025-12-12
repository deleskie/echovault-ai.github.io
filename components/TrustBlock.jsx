import Link from "next/link";

export default function TrustBlock({ headingId }) {
  return (
    <div className="trust-block">
      <div className="trust-block-head">
        <h3 id={headingId} className="trust-block-title">
          How we handle your stories
        </h3>
        <p className="trust-block-intro">
          EchoVault is built for families first, not for ads or engagement graphs. We treat every recording as part of a
          private family archive, not content.
        </p>
      </div>
      <div className="trust-block-columns">
        <div className="trust-block-column">
          <h4 className="trust-block-column-title">In plain language</h4>
          <p>
            EchoVault is being built to keep your recordings private by default. Only you and the people you invite
            should be able to access them. We don&apos;t want your family&apos;s stories showing up in ads, training
            demos, or anywhere else you didn&apos;t intend. If you ever want to stop, talk to us—we&apos;ll explain in
            clear language what we can remove or delete and what&apos;s already been shared with your family.
          </p>
        </div>
        <div className="trust-block-column">
          <h4 className="trust-block-column-title">If you speak more in specs</h4>
          <p>
            We&apos;re implementing standard safeguards as the product matures: encrypted transport (TLS), encryption at
            rest, least‑privilege access, and clear retention/deletion controls. We&apos;ll publish the exact details as
            we finalize infrastructure and hosting, and we&apos;ll answer any questions directly if you need specifics
            for your situation.
          </p>
        </div>
      </div>
      <p className="trust-block-note">
        If you have stricter requirements—for example, specific retention windows or export formats—reach out. We&apos;d
        rather talk through what&apos;s available now and what&apos;s in progress than gloss over the details.
        {" "}
        <Link href="/trust">Read our Trust &amp; Safety overview.</Link>
      </p>
    </div>
  );
}
